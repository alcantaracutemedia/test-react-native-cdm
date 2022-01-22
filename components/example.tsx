import { useContext } from 'react'
import { Text } from 'react-native'
import { DataContext } from '../contexts/dataProvider'

const Example = () =>{
    const {dark} = useContext(DataContext)

    return (
        dark ? <Text>Is dark your app!</Text> : <Text>Is't dark your app!</Text>
    )
}

export default Example