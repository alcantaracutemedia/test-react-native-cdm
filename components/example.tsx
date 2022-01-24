import { useContext } from 'react'
import { DataContext } from '../contexts/dataProvider'
import styled from 'styled-components'

const Example = () =>{
    const {dark} = useContext(DataContext)

    return (
        dark ? <ExmapleText>Is dark your app!</ExmapleText> : <ExmapleText>Is't dark your app!</ExmapleText>
    )
}

const ExmapleText = styled.text`
  font-size: 24px;
`;

export default Example