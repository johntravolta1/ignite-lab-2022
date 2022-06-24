import {Check, CheckCircle, Lock} from 'phosphor-react'
import {isPast, format} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface LessonProps {
    title: string;
    slugAula: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson({title, slugAula, availableAt, type}: LessonProps) {
    const {slug} = useParams<{slug: string}>();

    const isActiveLesson = slug === slugAula

    const isLessonAvailable = isPast(availableAt);
    const dateFormatted = format(availableAt, "EEEE' • 'd 'de ' MMMM ' • 'k'h'mm", {
        locale: ptBR
    });

    return(
        <Link to={`/event/lesson/${slugAula}`} className='group'>
            <span className="text-gray-300">
                {dateFormatted}
            </span>
         
            <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${isActiveLesson ? 'bg-green-500' : ''}`}>
                <header className="flex items-center justify-between">
                   { isLessonAvailable ? (
                     <span className={classNames("text-sn font-medium flex items-center gap-2", {
                        'text-white' : isActiveLesson,
                        'text-blue-500' : !isActiveLesson,
                     })}>
                        <CheckCircle size={20}></CheckCircle>
                        Conteúdo liberado
                     </span>
                   )
                    :
                    (
                    <span className="text-sn text-orange-500 font-medium flex items-center gap-2">
                        <Lock size={20}></Lock>
                        Em breve
                    </span>
                    )   
                }  
                    <span className={classNames("text-xs rounded py-[0.125rem] px-2 text-white border font-bold", {
                        'border-white' : isActiveLesson,
                        'border-green-300' : !isActiveLesson
                    })}>
                        {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong className={classNames("mt-5 block", {
                    'text-white' : isActiveLesson,
                    'text-gray-200' : !isActiveLesson,
                })}>{title}</strong>
            </div>
        </Link>

    )
}