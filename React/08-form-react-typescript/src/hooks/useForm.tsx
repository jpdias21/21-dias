import { ReactElement, FormEvent, useState } from "react"

export function useForm( {steps}: {steps : ReactElement[]}){

    const [currentStep, setCurrentStep] = useState<number>(0)

    function changeStep( i: number , event?: FormEvent){
        if(event) event.preventDefault()

        if(i < 0 || i >= steps.length) return 
        setCurrentStep(i)
    }
    return {steps, currentComponent : steps[currentStep], currentStep, changeStep, isLastStep : currentStep + 1 === steps.length ? true : false}
}