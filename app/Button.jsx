import { Button } from 'antd';

export const MyButton = ({ buttonText, style }) => {
    return <Button type='primary' style={style}>
        {buttonText}
    </Button>
}