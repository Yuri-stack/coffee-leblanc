import { IconProps } from "phosphor-react";
import { InfoItemContainer } from "./styles";

interface InfoItemProps{
    title: string
    icon: React.ForwardRefExoticComponent<
        IconProps & React.RefAttributes<SVGSVGElement>
    >;
}

export default function InfoItem({ title, icon: Icon }: InfoItemProps) {
    return (
        <InfoItemContainer>
            <div>
                <Icon size={22} weight="fill" />
            </div>
            <p>{ title }</p>
        </ InfoItemContainer>
    )
}
