import React, { useState, useEffect } from "react";
import Link from "next/link";
import router from "next/router";
import { Checkbox, Modal } from "flowbite-react";
import { LabelComponent } from "@/components/LabelComponent";
import { ButtonComponent } from "@/components/ButtonComponent";
import { termsConditions } from "../../services/TermsConditionsServices";
import { InputComponent } from "@/components/InputComponent";
import { login, register } from "@/services/AuthServices";

export default function Register() {
  const [openTerms, setOpenTerms] = useState(false);
  const [termsMessage, setTermsMessage] = useState<string>("");
  const [newUser, setNewUser] = useState<{
    name: string;
    email: string;
    login: string;
    password: string;
  }>({
    name: "",
    email: "",
    login: "",
    password: "",
  });

  useEffect(() => {
    const fetchTerms = async () => {
      const result = await termsConditions();
      setTermsMessage(result.data[0].content);
    };

    if (openTerms) {
      fetchTerms();
    }
  }, [openTerms]);

  const handleRegister = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      const resultRegister = await register(newUser);

      if (resultRegister.status === "success") {
        const resultLogin = await login(newUser);
        if (resultLogin.status === "success") {
          router.push("/home");
        } else {
          alert(resultLogin.message);
        }
      } else {
        alert(resultRegister.message);
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
                value={newUser.name}
                sizing="sm"
                type="text"
                placeholder="Nome"
                onChange={(e) =>
                  setNewUser({ ...newUser, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <InputComponent
                value={newUser.email}
                sizing="sm"
                type="email"
                placeholder="Email"
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
                required
              />
            </div>
            <div>
              <InputComponent
                value={newUser.login}
                sizing="sm"
                type="text"
                placeholder="Login"
                onChange={(e) =>
                  setNewUser({ ...newUser, login: e.target.value })
                }
                required
              />
            </div>
            <div>
              <InputComponent
                value={newUser.password}
                sizing="sm"
                type="password"
                placeholder="Senha"
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
                required
              />
            </div>
            <div className={styles.checkboxContainer}>
              <Checkbox id="agree" />
              <LabelComponent htmlFor="agree" className={styles.checkboxLabel}>
                Aceito os&nbsp;
                <Link
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTerms(true);
                  }}
                  className={styles.termsLink}
                >
                  termos e condições.
                </Link>
              </LabelComponent>
            </div>
            <ButtonComponent
              color="blue"
              size="sm"
              type="submit"
              className={styles.enterButton}
              onClick={handleRegister}
            >
              Cadastrar
            </ButtonComponent>
            <hr className={styles.divider} />
          </form>
          <footer className={styles.footer}>
            <p>&copy; 2024 Prime. Todos os direitos reservados.</p>
          </footer>
        </div>
      </div>

      {openTerms && (
        <Modal show={true} onClose={() => setOpenTerms(false)}>
          <Modal.Header>Termos e condições</Modal.Header>
          <Modal.Body>
            <pre className="font-sans text-xs">{termsMessage}</pre>
          </Modal.Body>
          <Modal.Footer>
            <p>&copy; 2024 Prime. Todos os direitos reservados.</p>
          </Modal.Footer>
        </Modal>
      )}
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
  divider: "my-4 border-b border-gray-300",
  footer: "mt-4 text-center text-gray-500",
  checkboxContainer: "flex items-center",
  checkboxLabel: "flex items-center ml-2",
  termsLink: "text-cyan-600 hover:underline dark:text-cyan-500",
};
