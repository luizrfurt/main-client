import { Button, TextInput } from "flowbite-react";
import Link from "next/link";
import React from "react";

export default function Index() {
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
                sizing="sm"
                id="login"
                type="text"
                placeholder="Login"
                required
              />
            </div>
            <div>
              <TextInput
                sizing="sm"
                id="password"
                type="password"
                placeholder="Senha"
                required
              />
            </div>
            <Link href="/home" passHref>
              <Button
                color="blue"
                size="sm"
                type="submit"
                className={styles.enterButton}
              >
                Entrar
              </Button>
            </Link>
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
  enterButton: "bg-blue-900 w-full",
  forgotPassword: "text-blue-500 underline",
  registerButton: "bg-gray-200 w-full",
  divider: "my-4 border-b border-gray-300",
  footer: "mt-4 text-center text-gray-500",
};
