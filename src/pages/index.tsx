import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ButtonComponent } from "@/components/ButtonComponent";
import { InputComponent } from "@/components/InputComponent";
import { login } from "../services/AuthServices";

export default function Index() {
  const router = useRouter();
  const [existingUser, setExistingUser] = useState<{
    login: string;
    password: string;
  }>({
    login: "",
    password: "",
  });

  const handleLogin = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      const result = await login(existingUser);

      if (result.status === "success") {
        router.push("/home");
      } else {
        alert(result.message);
      }
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className={styles.containerClass}>
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
  errorMessage: "text-red-500 text-center mt-2",
};
