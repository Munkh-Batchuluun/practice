import React, {useState} from 'react';

const Form = ({updateFn}) => {

    const initialState = {code: '', title: '', offering: []}

    const [formInfo, setFromInfo] = useState(initialState)

    const updateField = (e) => {
        const name = e.target.attributes.name.value
        console.log(e.target.value)

        if(name === "code"){
            setFromInfo({...formInfo, code: e.target.value})
        } else if(name === 'title'){
            setFromInfo({...formInfo, title: e.target.value})
        } else if(name === 'offering') {
            let offs = formInfo.offering
            console.log(e.target.checked, offs)
            if(e.target.checked){
                if(!offs.includes(e.target.value)){
                    offs = [...formInfo.offering, e.target.value]
                }
            } else {
                if(offs.includes(e.target.value)){
                    offs = offs.filter( o => o !== e.target.value)
                }
            }
            setFromInfo({...formInfo, offering: offs})
        }
    }

    const formHandler = (e) => {
        e.preventDefault()
        console.log("Form Submitted", formInfo)
        updateFn(formInfo)
        setFromInfo(initialState)
        
    }

    return(
        <form onSubmit={formHandler}>
            <label>Unit Code </label>
            <input
                name='code'
                onChange={updateField}
            ></input>

            <label> Unit Title </label>
            <input
                name='title'
                onChange={updateField}
            ></input>

            <label> Offerings </label>
            S1 <input type="checkbox" onChange={updateField} name='offering' value='S1'></input>
            S2 <input type="checkbox" onChange={updateField} name='offering' value='S2'></input>
            S3 <input type="checkbox" onChange={updateField} name='offering' value='S3'></input>

            <input type='submit'></input>
        </form>
    )
}

export default Form