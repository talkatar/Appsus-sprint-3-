
export const surveyService = {
    getSurvey
}

function getSurvey() {
    return Promise.resolve(survey)
}



const survey =
{
 
    cmps: [
       
        {
            type: 'selectBox',
            info: {
                label: 'How was it:',
                opts: ['Great', 'Fine', 'Crap', 'Worst Ever']
            }
        },

        {
            type: 'textBox',
            info: {
                label: 'Your rating:'
            }
        }
    ]
    }