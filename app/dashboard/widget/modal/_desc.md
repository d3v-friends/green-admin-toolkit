# Modal

~~~typescript jsx
"use client";
import React, {useState} from "react";
import {Button, ModalBasic} from "@app/index";

export default function () {
    const [basic, setBasic] = useState(false);

    return (
        <>
            <Button
                className="w-20"
                onClick={() => setBasic(true)}>
                Basic
            </Button>

            <ModalBasic
                open={basic}
                onChange={setBasic}
                header="Baisc modal">
                <div>Hello world</div>
            </ModalBasic>
        </>
    );
}
~~~
