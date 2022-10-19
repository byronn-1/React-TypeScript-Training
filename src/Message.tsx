//Remember you don't need to infer type any on the return type because any in the default type

interface UserMessage {
    name: string;
    message: string;
}

export const Message = (props:UserMessage ): any => {

    return (
        <p>{props.name}, {props.message}</p>
    )
}