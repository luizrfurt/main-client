import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ButtonComponent } from "@/components/ButtonComponent";
import { InputComponent } from "@/components/InputComponent";
import { Toast } from "flowbite-react";
import { HiX, HiCheck } from "react-icons/hi";
import { login } from "../services/AuthServices";

export default function Index() {
  const router = useRouter();
  const [existingUser, setExistingUser] = useState({ login: "", password: "" });
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState("");
  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const result = await login(existingUser);
      if (result.status === "success") {
        router.push("/home");
      } else if (result.status === "fail") {
        setToastMessage(result.message);
        setToastType("error");
      }
    } catch (err: any) {
      setToastMessage(err.message);
      setToastType("error");
    } finally {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 7000);
    }
  };

  const renderToastIcon = () => {
    if (toastType === "success") {
      return <HiCheck className={styles.successIcon} />;
    } else if (toastType === "error") {
      return <HiX className={styles.errorIcon} />;
    }
  };

  return (
    <div className={styles.containerClass}>
      {showToast && (
        <div className={styles.toastContainer}>
          <Toast>
            <div className={styles.toastClass}>{renderToastIcon()}</div>
            <div className={styles.messageClass}>{toastMessage}</div>
            <Toast.Toggle />
          </Toast>
        </div>
      )}

      <div className={styles.leftDivClass}></div>
      <div className={styles.rightDivClass}>
        <div className={styles.card}>
          <form className={styles.form}>
            <div className={styles.avatarContainer}>
              <img
                src="https://prime-repo.s3.sa-east-1.amazonaws.com/main/users/default-user-photo.png"
                alt="Avatar"
                className={styles.avatar}
              />
            </div>
            <div>
              <InputComponent
                value={existingUser.login}
                sizing="sm"
                type="text"
                placeholder="Login"
                onChange={(e) =>
                  setExistingUser({ ...existingUser, login: e.target.value })
                }
                required={true}
              />
            </div>
            <div>
              <InputComponent
                value={existingUser.password}
                sizing="sm"
                type="password"
                placeholder="Senha"
                onChange={(e) =>
                  setExistingUser({ ...existingUser, password: e.target.value })
                }
                required={true}
              />
            </div>
            <ButtonComponent
              color="blue"
              size="sm"
              type="submit"
              className={styles.loginButton}
              onClick={handleLogin}
            >
              Entrar
            </ButtonComponent>
            <Link href="#" passHref legacyBehavior>
              <a className={styles.forgotPassword}>Esqueci minha senha</a>
            </Link>
            <hr className={styles.divider} />
            <Link href="/register" passHref>
              <ButtonComponent
                color="light"
                size="sm"
                className={styles.registerButton}
              >
                Cadastrar-se
              </ButtonComponent>
            </Link>
          </form>
          <footer className={styles.footer}>
            <p>&copy; 2024 Prime. Todos os direitos reservados.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

const styles = {
  containerClass: "flex h-screen",
  leftDivClass:
    "flex-1 bg-blue-900 flex items-center justify-center transition-all duration-500",
  rightDivClass:
    "flex-1 bg-gray-200 flex items-center justify-center transition-all duration-500",
  card: "bg-white p-10 rounded-lg shadow-md",
  form: "flex max-w-md flex-col gap-4",
  avatarContainer: "flex justify-center mb-4",
  avatar: "w-24 h-24 rounded-full",
  loginButton: "bg-blue-900 w-full",
  forgotPassword: "text-blue-500 underline",
  registerButton: "bg-gray-200 w-full",
  divider: "my-4 border-b border-gray-300",
  footer: "mt-4 text-center text-gray-500",
  toastContainer: "fixed top-4 right-4 z-50",
  toastClass:
    "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
  iconClass: "h-5 w-5",
  messageClass: "ml-3 text-sm font-normal",
  successIcon: "h-7 w-7 text-green-200 rounded-lg",
  errorIcon: "h-7 w-7 text-red-500 bg-red-200 rounded-lg",
};
