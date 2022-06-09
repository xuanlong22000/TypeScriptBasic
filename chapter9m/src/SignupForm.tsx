import React, { useState } from "react";
import './FancyButton'
import { FancyButton } from "./FancyButton";

type Props = {
    title: string
    userId: string
}


// type State = {
//     isLoading: boolean
// }

// export class SignupForm extends React.Component<Props, State>{
//     state = {
//         isLoading: false
//     }

//     private signup = async () => {
//         this.setState({ isLoading: true })
//         try {
//             await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.userId}`)
//                 .then(res => res.json())
//         } finally {
//             this.setState({ isLoading: false })
//         }
//     }

//     render() {
//         return (
//             <>
//                 <h2>{this.props.title}</h2>
//                 <FancyButton
//                     isDisabled={this.state.isLoading}
//                     size='Big'
//                     text='Sign Up Now'
//                     onClick={this.signup}
//                 />
//             </>
//         )
//     }
// }


export const SignupForm = (props: Props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [post, setPost] = useState<any[]>([])

    const signup = async () => {
        setIsLoading(true)

        try {
            await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${props.userId}`)
                .then(res => res.json())
                .then(post => setPost(post))
        } finally {
            setIsLoading(false)
        }

    }

    return (
        <>
            <h2>{props.title}</h2>
            <FancyButton
                isDisabled={isLoading}
                size='Big'
                text='Sign Up Now'
                onClick={signup}
            />

            {post.map(post => <li key={post.id}>{post.body}</li>)}
        </>
    )
}
