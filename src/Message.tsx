//Remember you don't need to infer type any on the return type because any in the default type


export const Message = (props: {message: string}): any => {

    return (
        <p>{props.message}</p>
    )
}