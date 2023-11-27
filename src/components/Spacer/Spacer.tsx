interface Props {
    px: string | number;
}

export default function Spacer(props: Props) {
    return (
        <div
            style={{
                height: `${props.px}px`,
            }}
        ></div>
    );
}
