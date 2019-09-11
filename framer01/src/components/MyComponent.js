import * as React from "react"
import { Frame, Scroll } from "framer"

export function MyComponent() {
    return (
        <Scroll height={150}>
            <Frame height={70} />
            <Frame height={70} top={80} />
            <Frame height={70} top={160} />
        </Scroll>
    )
}
