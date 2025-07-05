import React from 'react';
import DashboardLayout from '@components/DashboardLayout';
import Container from '@components/ui/container/Container';
import CodeBlock from '@components/CodeBlock';
import HeaderText from '@components/HeaderText';
import CodePreviewToggle from '@components/CodePreviewToggle';

import {
    FaStar,
    FaBriefcase,
    FaCheck,
    FaExclamationCircle,
    FaExclamationTriangle,
    FaInfoCircle,
    FaFolder
} from 'react-icons/fa';

import Button, {
    PrimaryButton,
    SecondaryButton,
    SuccessButton,
    DangerButton,
    WarningButton,
    InfoButton,
    LightButton,
    DarkButton,
    LinkButton,
    OutlinePrimaryButton,
    OutlineSecondaryButton,
    OutlineSuccessButton,
    OutlineDangerButton,
    OutlineWarningButton,
    OutlineInfoButton,
    OutlineDarkButton,
    RoundedButton,
    SmallButton,
    NormalButton,
    LargeButton,
    BlockButton,
    ButtonWithIcon,
    IconOnlyButton
} from '@components/ui/buttons/Buttons';

const ButtonPage = () => {
    const defaultButtonsCode = `<PrimaryButton>Primary</PrimaryButton>
<SecondaryButton>Secondary</SecondaryButton>
<SuccessButton>Success</SuccessButton>
<DangerButton>Danger</DangerButton>
<WarningButton>Warning</WarningButton>
<InfoButton>Info</InfoButton>
<LightButton>Light</LightButton>
<DarkButton>Dark</DarkButton>
<LinkButton>Link</LinkButton>`;

    const outlineButtonsCode = `<OutlinePrimaryButton>Primary</OutlinePrimaryButton>
<OutlineSecondaryButton>Secondary</OutlineSecondaryButton>
<OutlineSuccessButton>Success</OutlineSuccessButton>
<OutlineDangerButton>Danger</OutlineDangerButton>
<OutlineWarningButton>Warning</OutlineWarningButton>
<OutlineInfoButton>Info</OutlineInfoButton>
<OutlineDarkButton>Dark</OutlineDarkButton>`;

    const roundedButtonsCode = `<RoundedButton variant="primary">Primary</RoundedButton>
<RoundedButton variant="secondary">Secondary</RoundedButton>
<RoundedButton variant="success">Success</RoundedButton>
<RoundedButton variant="danger">Danger</RoundedButton>
<RoundedButton variant="warning">Warning</RoundedButton>
<RoundedButton variant="info">Info</RoundedButton>`;

    const sizeButtonsCode = `<SmallButton variant="primary">Small</SmallButton>
<NormalButton variant="primary">Normal</NormalButton>
<LargeButton variant="primary">Large</LargeButton>

<SmallButton variant="primary" outline>Small</SmallButton>
<NormalButton variant="primary" outline>Normal</NormalButton>
<LargeButton variant="primary" outline>Large</LargeButton>

<BlockButton variant="primary">Block Button</BlockButton>`;

    const iconButtonsCode = `<ButtonWithIcon icon={<FaStar />}>With Text</ButtonWithIcon>
<IconOnlyButton icon={<FaBriefcase />} />
<IconOnlyButton icon={<FaCheck />} variant="success" />
<IconOnlyButton icon={<FaExclamationCircle />} variant="danger" />
<IconOnlyButton icon={<FaExclamationTriangle />} variant="warning" />
<IconOnlyButton icon={<FaInfoCircle />} variant="info" />
<IconOnlyButton icon={<FaFolder />} variant="dark" />`;

    const statesButtonsCode = `<PrimaryButton>Normal</PrimaryButton>
<PrimaryButton disabled>Disabled</PrimaryButton>

<OutlinePrimaryButton>Normal</OutlinePrimaryButton>
<OutlinePrimaryButton disabled>Disabled</OutlinePrimaryButton>`;

    return (
        <DashboardLayout
            title="Button Components"
            breadcrumb={[
                { name: 'Home', href: '/dashboard' },
                { name: 'Components' },
                { name: 'Buttons' }
            ]}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Container className="p-5">
                    <CodePreviewToggle
                        previewContent={
                            <div>
                                <HeaderText
                                    TitleHeader="Default"
                                    title="Buttons"
                                />
                                <div className="flex flex-wrap gap-2 mt-5">
                                    <PrimaryButton>Primary</PrimaryButton>
                                    <SecondaryButton>Secondary</SecondaryButton>
                                    <SuccessButton>Success</SuccessButton>
                                    <DangerButton>Danger</DangerButton>
                                    <WarningButton>Warning</WarningButton>
                                    <InfoButton>Info</InfoButton>
                                    <LightButton>Light</LightButton>
                                    <DarkButton>Dark</DarkButton>
                                    <LinkButton>Link</LinkButton>
                                </div>
                            </div>
                        }
                        codeContent={defaultButtonsCode}
                    />
                </Container>

                <Container className="p-5">
                    <CodePreviewToggle
                        previewContent={
                            <div>
                                <HeaderText
                                    TitleHeader="Outline"
                                    title="Buttons"
                                />
                                <div className="flex flex-wrap gap-2 mt-5">
                                    <OutlinePrimaryButton>Primary</OutlinePrimaryButton>
                                    <OutlineSecondaryButton>Secondary</OutlineSecondaryButton>
                                    <OutlineSuccessButton>Success</OutlineSuccessButton>
                                    <OutlineDangerButton>Danger</OutlineDangerButton>
                                    <OutlineWarningButton>Warning</OutlineWarningButton>
                                    <OutlineInfoButton>Info</OutlineInfoButton>
                                    <OutlineDarkButton>Dark</OutlineDarkButton>
                                </div>
                            </div>
                        }
                        codeContent={outlineButtonsCode}
                    />
                </Container>

                <Container className="p-5">
                    <CodePreviewToggle
                        previewContent={
                            <div>
                                <HeaderText
                                    TitleHeader="Rounded"
                                    title="Buttons"
                                />
                                <div className="flex flex-wrap gap-2 mt-5">
                                    <RoundedButton variant="primary">Primary</RoundedButton>
                                    <RoundedButton variant="secondary">Secondary</RoundedButton>
                                    <RoundedButton variant="success">Success</RoundedButton>
                                    <RoundedButton variant="danger">Danger</RoundedButton>
                                    <RoundedButton variant="warning">Warning</RoundedButton>
                                    <RoundedButton variant="info">Info</RoundedButton>
                                    <LightButton rounded>Light</LightButton>
                                    <DarkButton rounded>Dark</DarkButton>
                                </div>
                            </div>
                        }
                        codeContent={roundedButtonsCode}
                    />
                </Container>

                <Container className="p-5">
                    <CodePreviewToggle
                        previewContent={
                            <div>
                                <HeaderText
                                    TitleHeader="Button States"
                                    title="Buttons"
                                />
                                <div className="mt-5">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <PrimaryButton>Normal</PrimaryButton>
                                        <PrimaryButton disabled>Disabled</PrimaryButton>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <OutlinePrimaryButton>Normal</OutlinePrimaryButton>
                                        <OutlinePrimaryButton disabled>Disabled</OutlinePrimaryButton>
                                    </div>
                                </div>
                            </div>
                        }
                        codeContent={statesButtonsCode}
                    />
                </Container>

                <Container className="p-5 col-span-1 md:col-span-2">
                    <CodePreviewToggle
                        previewContent={
                            <div>
                                <HeaderText
                                    TitleHeader="Button Sizes"
                                    title="Buttons"
                                />
                                <div className="mt-5">
                                    <div className="flex flex-wrap items-center gap-2 mb-4">
                                        <SmallButton variant="primary">Small</SmallButton>
                                        <NormalButton variant="primary">Normal</NormalButton>
                                        <LargeButton variant="primary">Large</LargeButton>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2 mb-6">
                                        <SmallButton variant="primary" outline>Small</SmallButton>
                                        <NormalButton variant="primary" outline>Normal</NormalButton>
                                        <LargeButton variant="primary" outline>Large</LargeButton>
                                    </div>
                                    <div className="mb-6">
                                        <BlockButton variant="primary">Block Button</BlockButton>
                                    </div>
                                </div>
                            </div>
                        }
                        codeContent={sizeButtonsCode}
                    />
                </Container>

                <Container className="p-5 col-span-1 md:col-span-2">
                    <CodePreviewToggle
                        previewContent={
                            <div>
                                <HeaderText
                                    TitleHeader="Icon"
                                    title="Buttons"
                                />
                                <div className="flex flex-wrap gap-2 mt-5">
                                    <ButtonWithIcon icon={<FaStar />}>With Text</ButtonWithIcon>
                                    <IconOnlyButton icon={<FaBriefcase />} />
                                    <IconOnlyButton icon={<FaCheck />} variant="success" />
                                    <IconOnlyButton icon={<FaExclamationCircle />} variant="danger" />
                                    <IconOnlyButton icon={<FaExclamationTriangle />} variant="warning" />
                                    <IconOnlyButton icon={<FaInfoCircle />} variant="info" />
                                    <IconOnlyButton icon={<FaFolder />} variant="dark" />
                                </div>
                            </div>
                        }
                        codeContent={iconButtonsCode}
                    />
                </Container>
            </div>
        </DashboardLayout>
    );
};

export default ButtonPage;