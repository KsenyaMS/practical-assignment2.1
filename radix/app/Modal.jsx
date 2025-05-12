import * as React from "react";
import { Dialog } from "radix-ui";

export const MyModal = () => {

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <button>Edit profile</button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent">
                    <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
                    <Dialog.Description className="DialogDescription">
                        Make changes to your profile here. Click save when you're done.
                    </Dialog.Description>
                    <div
                        style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
                    >
                        <Dialog.Close>
                            <button className="Button green">Save changes</button>
                        </Dialog.Close>
                    </div>
                    <Dialog.Close>
                        <button className="IconButton">
                            123
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}