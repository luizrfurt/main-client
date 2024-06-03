import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, TextInput } from "flowbite-react";
import { login } from "../services/AuthServices";

export default function Index() {
  const router = useRouter();
  const [loginValue, setLoginValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const handleLoggedIn = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await login(loginValue, passwordValue);
    alert(result.message);
    if (result.status === "success") {
      router.push("/home");
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
              <TextInput
                value={loginValue}
                sizing="sm"
                id="login"
                name="login"
                type="text"
                placeholder="Login"
                required
                onChange={(e) => setLoginValue(e.target.value)}
              />
            </div>
            <div>
              <TextInput
                value={passwordValue}
                sizing="sm"
                id="password"
                name="password"
                type="password"
                placeholder="Senha"
                required
                onChange={(e) => setPasswordValue(e.target.value)}
              />
            </div>
            <Button
              id="loggedIn"
              color="blue"
              size="sm"
              type="submit"
              className={styles.loginButton}
              onClick={handleLoggedIn}
            >
              Entrar
            </Button>
            <Link href="#" passHref legacyBehavior>
              <a className={styles.forgotPassword}>Esqueci minha senha</a>
            </Link>
            <hr className={styles.divider} />
            <Link href="/register" passHref>
              <Button color="light" size="sm" className={styles.registerButton}>
                Cadastrar-se
              </Button>
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
