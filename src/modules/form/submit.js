import dayjs from 'dayjs'

import {scheduleNew} from '../../services/schedule-new.js'
import {schedulesDay} from '../schedules/load.js'

const form = document.querySelector('form')
const selectedDate = document.getElementById('date')
const clientName = document.getElementById('client')

// Data atual para formatar o input
const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

// Carrega a data atual e define a data mínima como sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async(event) => {
    // Previne o envio padrão do formulário
    event.preventDefault()

    try {
        // Recuperando o nome do cliente
        const name = clientName.value.trim()
        
        if (!name) {
            return alert('Por favor, informe o nome do cliente.')
        }

        // Recupera o horário selecionado
        const hourSelected = document.querySelector('.hour-selected')
        
        // Recuperando o horário selecionado
        if (!hourSelected) {
            return alert('Selecione a hora')
        }

        // Recupera somente a hora
        const [hour] = hourSelected.innerText.split(':')
        
        // Insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, 'hour')
        
        // Gera um ID
        const id = new Date().getTime().toString()

        // Faz o agendamento, envia para api
        await scheduleNew({
            id,
            name,
            when
        });

        // Recarregar os agendamentos
        await schedulesDay();

        // Limpando o campo do nome do cliente após o agendamento anterior for sucedido 
        clientName.value = ''
    } catch (error) {
        alert('Não foi possível realizar o agendamento.')
        console.log(error);
    }
} 