import classNames from 'classnames'
import styles from './styles.module.scss'
import { useState } from 'react'

const Input = ({
    value,
    onChange,
    id,
    className,
    type = 'text',
    passwordShowToggle,
    variant,
    size,
    placeholder,
    label,
    errors,
    isRequired,
    ...res
}) => {
    const [passwordVisibility, setPasswordVisibility] = useState(false)
    const handleClick = () => {
        setPasswordVisibility(!passwordVisibility)
    }
    return (
        <>
            {passwordShowToggle && type === 'password' ? (
                <>
                    <label htmlFor={id}>{label}</label>
                    <input
                        className={classNames(
                            className,
                            styles.base,
                            styles?.[variant],
                            styles?.[size]
                        )}
                        value={value}
                        onChange={onChange}
                        id={id}
                        placeholder={placeholder}
                        type={passwordVisibility ? 'text' : 'password'}
                        required={isRequired}
                        {...res}
                    />

                    <span
                        onClick={handleClick}
                        className={classNames(
                            styles.visibilityToggle,
                            styles?.[size]
                        )}
                    >
                        {passwordVisibility ? 'Hide' : 'Show'}
                    </span>
                    {errors && <div className={styles.errors}>{errors}</div>}
                </>
            ) : (
                <>
                    <label htmlFor={id}>{label}</label>
                    <input
                        className={classNames(
                            className,
                            styles.base,
                            styles?.[variant],
                            styles?.[size]
                        )}
                        value={value}
                        onChange={onChange}
                        id={id}
                        placeholder={placeholder}
                        type={type}
                        required={isRequired}
                        {...res}
                    />
                    {errors && <div className={styles.errors}>{errors}</div>}
                </>
            )}
        </>
    )
}

export default Input
