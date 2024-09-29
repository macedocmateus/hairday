import {scheduleFetchByDay} from '../../services/schedule-fetch-by-day.js'
import { schedulesShow } from './show.js'
import { hoursLoad } from '../form/hours-load.js'

// Seleciona o input de data
const selectedDate = document.getElementById('date')

export async function schedulesDay() {
    // Obtém a data no input
    const date = selectedDate.value    

    // Busca na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({date})
    console.log(dailySchedules);

    //Exibe os agendamentos
    schedulesShow({dailySchedules})

    // Renderiza as horas disponíveis
    hoursLoad({date})
}