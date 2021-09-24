import { InputDataForm } from 'components/InputDataForm'
import React from 'react'
import GenericTemplate from 'templates/GenericTemplate'

const Edit: React.FC = () => {
  return (
    <div>
      <GenericTemplate title="編集ページ">
        <InputDataForm />
      </GenericTemplate>
    </div>
  )
}

export default Edit
