import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { TypographySize, inputStyle, typographySizes } from './stylesVariant';

interface TextInputProps {
    theme: 'light' | 'dark';
    size?: TypographySize;
    horizontalLine?: boolean;
    id?: string;
    value?: string;
    placeholder?: string;
    autoFocus?: boolean;
    clearOnSubmit?: boolean;
    onSubmit?: { (value: string): void };
    onEmpty?: { (id: string): void };
    labelStyle?: boolean;
}

export function TextInputVariant(props: TextInputProps) {
    const [state, setState] = useState({
        value: props.value || '',
        hasFocus: false,
        pressingEnter: false,
    });

    useEffect(() => {
        setState({ ...state, value: props.value || '' });
    }, [props.value]);

    const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            setState({ ...state, pressingEnter: true });
            e.preventDefault();
        }
    };

    const onKeyUp = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            if (e.target && props.onSubmit) {
                props.onSubmit((e.target as HTMLInputElement).value);
            }

            if (props.clearOnSubmit) {
                setState({ ...state, value: '', pressingEnter: false });
            } else {
                setState({ ...state, pressingEnter: false });
            }

            e.preventDefault();
        }

        if (e.key === 'Backspace' || e.key === 'Delete') {
            if (
                props.onEmpty &&
                (e.target as HTMLInputElement).value.length < 1
            ) {
                props.onEmpty(props.id || '');
            }
            e.preventDefault();
        }
    };

    const onInput: React.FormEventHandler<HTMLTextAreaElement> = e => {
        if (!state.pressingEnter) {
            const target = e.target as HTMLTextAreaElement;
            setState({ ...state, value: target.value });
            target.style.height = '1px';
            target.style.height = target.scrollHeight + 'px';
        }
    };

    const setFocus = (f: boolean) => {
        setState({ ...state, hasFocus: f });

        if (!f) {
            const newValue = ref.current?.value || '';
            const origValue = props.value || '';

            if (newValue !== origValue && props.onSubmit) {
                props.onSubmit(newValue);
            }
        }
    };

    const ref = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        const resizeTextArea = () => {
            if (ref.current) {
                ref.current.style.height = '1px';
                ref.current.style.height = ref.current.scrollHeight + 'px';
            }
        };

        window.addEventListener('resize', resizeTextArea);
        resizeTextArea();

        return () => {
            window.removeEventListener('resize', resizeTextArea);
        };
    });

    const style = {
        ...inputStyle(props.theme, state.hasFocus),
        ...typographySizes[props.size || 'small'],
    };

    if (props.labelStyle) {
        style.textAlign = 'center';
        style.textTransform = 'uppercase';
        style.backgroundColor = 'rgba(0, 0, 255, 0.05)';
        style.borderRadius = '8px';
        style.padding = '1px 0 4px 0';
        style.margin = '0';
        style.fontWeight = 'bold';
        style.fontSize = '8pt';
        style.color = '#518EBE';
        style.border = '2px solid #518EBE';
        style.cursor = 'pointer';
        style.lineHeight = '1.5';
    }

    return (
        <div>
            {props.horizontalLine ? (
                <hr
                    key="line"
                    style={{
                        borderColor: inputStyle(props.theme, false)
                            .backgroundColor,
                    }}
                />
            ) : (
                ''
            )}
            <textarea
                key="text"
                ref={ref}
                placeholder={props.placeholder || ''}
                autoFocus={props.autoFocus || false}
                onInput={onInput}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                style={style}
                value={state.value}
                onFocus={e => setFocus(true)}
                onBlur={e => setFocus(false)}
                tabIndex={props.labelStyle ? -1 : 1}
                spellCheck={state.hasFocus}
            ></textarea>
        </div>
    );
}
