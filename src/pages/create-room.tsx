import amaLogo from '../assets/ama-logo.svg';

export const CreateRoom = () => {
  return (
    <main className="h-screen flex items-center justify-center px-4">
      <div className="max-w-[450px] flex flex-col gap-6">
        <img src={amaLogo} alt="AMA" className="h-10" />

        <p className="leading-3">
          Crie uma sala pública de AMA (Ask me anything) e priorize as perguntas
          mais importantes para a comunidade.
        </p>
      </div>
    </main>
  );
};
