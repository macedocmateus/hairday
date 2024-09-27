import { apiConfig } from "./api-config.js";

export async function scheduleNew({id, name,when}) {
    try {
        // Faz a requisição para envia os dados do agendamento
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id,
                name,
                when
            })
        })

        // Exibe uma mensagem de agendamento realizado
        alert('Agendamento criado com sucesso!')
    } catch (error) {
        console.log(error);
        alert('Não foi possível agendar. Tente novamente mais tarde!')
    }
}