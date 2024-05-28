import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import React from "react";

export default function Register() {
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
                id="name"
                type="text"
                placeholder="Nome"
                required
              />
            </div>
            <div>
              <TextInput
                sizing="sm"
                id="email"
                type="email"
                placeholder="Email"
                required
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
            <div>
              <TextInput
                sizing="sm"
                id="confirmPassword"
                type="password"
                placeholder="Confirmação de senha"
                required
              />
            </div>
            <div className={styles.checkboxContainer}>
              <Checkbox id="agree" />
              <Label htmlFor="agree" className={styles.checkboxLabel}>
                Aceito os&nbsp;
                <Link href="#" className={styles.termsLink}>
                  termos de uso e condições.
                </Link>
              </Label>
            </div>
            <Button
              color="blue"
              size="sm"
              type="submit"
              className={styles.enterButton}
            >
              Cadastrar
            </Button>
            <hr className={styles.divider} />
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
  enterButton: "bg-blue-900",
  divider: "my-4 border-b border-gray-300",
  footer: "mt-4 text-center text-gray-500",
  checkboxContainer: "flex items-center",
  checkboxLabel: "flex items-center ml-2",
  termsLink: "text-cyan-600 hover:underline dark:text-cyan-500",
};
