import DashboardLayout from '@components/DashboardLayout';
import Container from '@components/ui/container/Container';
import Accordion from '@components/ui/accordions/Accordion';
import CodePreviewToggle from '@components/CodePreviewToggle';

const AccordionPage = () => {
    const defaultAccordionItems = [
        {
            title: "Accordion Item #1",
            content: (
                <>
                    <p className="mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores earum debitis reprehenderit!</p>
                </>
            )
        },
        {
            title: "Accordion Item #2",
            content: (
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo, tempus odio a, vestibulum nibh. Praesent fringilla fermentum risus, eu cursus purus suscipit eu.</p>
            )
        },
        {
            title: "Accordion Item #3",
            content: (
                <p>Ut eu ex enim. Curabitur vulputate quam non cursus placerat. Aenean in dapibus metus. Nunc luctus, lorem nec efficitur finibus, dui mi venenatis mi, vel dapibus diam dolor at nunc.</p>
            )
        }
    ];

    const borderlessAccordionItems = [
        {
            title: "Accordion Item #1",
            content: (
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem qui vero placeat.</p>
            )
        },
        {
            title: "Accordion Item #2",
            content: (
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo, tempus odio a, vestibulum nibh.</p>
            )
        },
        {
            title: "Accordion Item #3",
            content: (
                <p>Ut eu ex enim. Curabitur vulputate quam non cursus placerat. Aenean in dapibus metus.</p>
            )
        }
    ];

    const defaultAccordionCode = `// Default Accordion Example
<Accordion 
  items={items} 
  defaultOpen={0} 
  titleHeader="Default"
  title="Accordion"
/>`;

    const borderlessAccordionCode = `// Borderless Accordion Example
<Accordion 
  items={items}
  defaultOpen={0}
  variant="borderless"
  titleHeader="Accordion without outline borders" 
/>`;

    return (
        <DashboardLayout
            title="Accordions"
            breadcrumb={[
                { name: 'Home', href: '/' },
                { name: 'Components' },
                { name: 'Accordion', href: '/components/accordions' }
            ]}
        >
            <div className="grid grid-cols-2 gap-6">
                <Container className="p-5">
                    <CodePreviewToggle
                        previewContent={
                            <Accordion
                                items={defaultAccordionItems}
                                defaultOpen={0}
                                titleHeader="Default"
                                title="Accordion"
                            />
                        }
                        codeContent={defaultAccordionCode}
                    />
                </Container>

                <Container className="p-5">
                    <CodePreviewToggle
                        previewContent={
                            <Accordion
                                items={borderlessAccordionItems}
                                defaultOpen={0}
                                variant="borderless"
                                titleHeader="Accordion without outline borders"
                            />
                        }
                        codeContent={borderlessAccordionCode}
                    />
                </Container>
            </div>
        </DashboardLayout>
    )
}

export default AccordionPage