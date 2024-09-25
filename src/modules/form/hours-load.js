import dayjs from 'dayjs';
import { openingHours } from '../../utils/opening-hours.js'

const hours = document.getElementById('hours')

export function hoursLoad({date}) {
    const opening = openingHours.map((hour) => {
        // Recupera somente a hora
        const [scheduleHour] = hour.split(':')
        console.log(scheduleHour);

        // Adiciona a hora na data e verifica se está no passado para bloqueá-la

        const isHourPast = dayjs(date).add(scheduleHour, 'hour').isBefore(dayjs())

        return ({
            hour,
            available: !isHourPast,

        })
        
    })

    // Renderizar os horários

    opening.forEach(({hour, available}) => {
        const li = document.createElement('li')
        li.classList.add('hour')
        li.classList.add(available? 'hour-available' : 'hour-unavailable')

        li.textContent = hour

        hours.append(li)
    })

}