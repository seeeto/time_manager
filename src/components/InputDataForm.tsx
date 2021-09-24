import React from 'react'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
// import { DatePicker } from './parts/DatePicker'
// import 'react-datepicker/dist/react-datepicker.css'

type valuesType = {
  name: string
  introduction: string
  department: 'product' | 'sales' | 'marketing' | ''
  programingLanguage: 'golang' | 'ruby' | 'javascript' | ''
}

const InputDataForm: React.VFC = () => {
  const { register, watch, handleSubmit, formState } = useForm<valuesType>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
      introduction: '',
      department: '',
      programingLanguage: '',
    },
  })

  const handleOnSubmit: SubmitHandler<valuesType> = (values) => {
    console.log(values)
    // ここでDB登録する
  }

  const handleOnError: SubmitErrorHandler<valuesType> = (errors) => {
    console.log(errors)
  }

  return (
    <form onSubmit={handleSubmit(handleOnSubmit, handleOnError)}>
      <label htmlFor="name">Name</label>
      {!!formState.errors.name && <p>{formState.errors.name.message}</p>}
      <input
        id="name"
        type="text"
        // isError={!!formState.errors.name} // エラー時にborderの色を変更するためのprops
        {...register('name', {
          required: '* this is required filed',
        })}
      />

      <label htmlFor="introduction">Introduction</label>
      {!!formState.errors.introduction && (
        <p>{formState.errors.introduction.message}</p>
      )}
      <textarea
        id="introduction"
        //isError={!!formState.errors.introduction}
        {...register('introduction', {
          required: '* this is required filed',
          minLength: {
            value: 10,
            message: '* please enter at least 10 characters',
          },
        })}
      />

      <label htmlFor="department">Department</label>
      {!!formState.errors.department && (
        <p>{formState.errors.department.message}</p>
      )}
      <select
        id="department"
        //isError={!!formState.errors.department}
        {...register('department', {
          required: '* this is required filed',
        })}
      >
        <option value="" hidden>
          please selecting...
        </option>
        <option value="product">Product</option>
        <option value="sales">Sales</option>
        <option value="marketing">Marketing</option>
      </select>

      {watch('department') === 'product' && (
        <>
          <label htmlFor="programing-langage">Programing Language</label>
          <select id="programing-language" {...register('programingLanguage')}>
            <option value="" hidden>
              please selecting...
            </option>
            <option value="golang">Golang</option>
            <option value="ruby">Ruby</option>
            <option value="javascript">Javascript</option>
          </select>
        </>
      )}

      <button
        type="submit"
        disabled={!formState.isDirty || formState.isSubmitting}
      >
        Click
      </button>
    </form>
  )
}
export { InputDataForm }
