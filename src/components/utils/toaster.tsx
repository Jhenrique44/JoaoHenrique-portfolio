export function Toaster(){ 
    const { toast } = useToast();

    return( 
        <TaostProvider>
            { toasts.map(function( { id, title, description, action, ...props}) {
                return ( 
                    <Toast 
                    key={ id} { ...props}>
                        <div className="">
                            {title && <ToastTitle>{title}</ToastTitle>} { description && <ToastDescription>{description}</ToastDescription}}
                        </div>

                    </Toast>
                )
            }
                 )}
        </TaostProvider>
    )
}