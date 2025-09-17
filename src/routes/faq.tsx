const Faq = () => {
    return (
        <main className="flex flex-col items-center justify-center m-8 ">
        <div className="flex flex-col items-center justify-center p-8 bg-blue-400 rounded-lg w-150 h-auto text-white text-2xl font-bold gap-4">
            <h1>Seja Bem-Vindo ao nosso FAQ</h1>
            <h2>Precisa de Ajuda?</h2>
            <input type="text" placeholder="Digite sua dúvida aqui..." className="p-2 rounded w-auto text-black border-x-2 border-blue-700"/>
        </div>
        <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg w-auto h-auto text-2xl font-bold gap-4 m-10 text-black">
            <h1>Perguntas Frequentes</h1>
        </div>
        </main>
    );
}

export default Faq;