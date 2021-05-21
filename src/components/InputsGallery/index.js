import Input from '../Input'
import './style.scss'
const InputsGallery = () => {
    return (
        <div className="inputs-container">
            <div className="inputs-size">
                <div className="size-container">
                    <h5>size={'xs'}</h5>
                    <Input size={'xs'} />
                </div>
                <div className="size-container">
                    <h5>size={'sm'}, error message</h5>
                    <Input size={'sm'} />
                </div>
                <div className="size-container">
                    <h5>default size={'md'} variant=filled</h5>
                    <Input variant={'filled'} />
                </div>
                <div className="size-container">
                    <h5>size={'lg'}</h5>
                    <Input size={'lg'} />
                </div>
                <div className="size-container">
                    <h5>size={'xl'}, variant=filled</h5>
                    <Input size={'xl'} variant={'filled'} />
                </div>
            </div>
            <div className="inputs-others">
                <div className="size-container">
                    <h5>variant={'ghost'}, placeholder</h5>
                    <Input variant={'ghost'} placeholder={'Ghost variant'} />
                </div>
                <div className="size-container">
                    <h5>
                        size={'sm'}, variant={'filled'}
                    </h5>
                    <Input size={'sm'} variant={'filled'} />
                </div>
                <div className="size-container">
                    <h5>With label</h5>
                    <Input label={'Input label'} />
                </div>
                <div className="size-container">
                    <h5>Type password, variant filled, passwordShowToggle</h5>
                    <Input
                        type={'password'}
                        variant={'filled'}
                        placeholder={'Show password'}
                        passwordShowToggle
                    />
                </div>
            </div>
        </div>
    )
}

export default InputsGallery
