import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Produtos() {
    return (
        <div style={{display:'flex'}} >
            <Card style={{ width: '18rem',marginLeft: '15px' }}>
                <Card.Img variant="top" src="https://img.ltwebstatic.com/images3_ccc/2023/11/13/f1/1699876651ced4c5a62637e6180db87f94aade3ed3.webp"
                />
                <Card.Body>
                    <Card.Title>Vestindo o Verão</Card.Title>
                    <Card.Text>
                    Roupas Leves e Deslumbrantes
                    </Card.Text>
                    <Button href='https://br.shein.com/campaigns/emery_rose?type=immersive&src_module=Women&src_identifier=on%3DIMAGE_CAROUSEL_COMPONENT%60cn%3Dbrands%60hz%3D0%60ps%3D9_4%60jc%3DactivityNew_emery_rose&src_tab_page_id=page_home1700870173092&ici=CCCSN%3DWomen_ON%3DIMAGE_CAROUSEL_COMPONENT_OI%3D12436380_CN%3DITEM_IMAGE_MULTI_CAROUSEL_TI%3D50001_aod%3D0_PS%3D9-4_ABT%3D0' variant="outline-danger">Saiba mais</Button>
                </Card.Body>
            </Card>
            
            <Card style={{ width: '18rem',marginLeft:'15px' }}>
                <Card.Img variant="top" src="https://img.ltwebstatic.com/images3_ccc/2023/11/06/d6/169927048497f1fcd031e3b9164b3560d18c6191e7.webp" />
                <Card.Body>
                    <Card.Title>Sofisticado e Chic</Card.Title>
                    <Card.Text>
                    Looks para Arrasar
                    </Card.Text>
                    <Button href='https://br.shein.com/trends/DAZY-X-HyunA-sc-006225310.html?src_module=activity&src_identifier=on%3DIMAGE_COMPONENT%60cn%3DH1%60hz%3D0%60ps%3D1_1%60jc%3DitemPicking_006225310%60ai%3D14953626%60an%3Ddazyxhyuna&src_tab_page_id=page_activity_factory1700870038937&ici=CCCSN%3Dactivity_ON%3DIMAGE_COMPONENT_OI%3D11768347_CN%3DONE_IMAGE_COMPONENT_TI%3D50001_aod%3D0_PS%3D1-1_ABT%3D0' variant="outline-danger">Saiba mais</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem',marginLeft:'15px' }}>
                <Card.Img variant="top" src="https://img.ltwebstatic.com/images3_ccc/2023/11/06/34/1699272433e596a1808b2e91c441dd72a7efc78f14.webp" />
                <Card.Body>
                    <Card.Title>Corra na Moda</Card.Title>
                    <Card.Text>
                    Roupas para Quilômetros de Estilo
                    </Card.Text>
                    <Button href='https://br.shein.com/Brands/GLOWMODE-sc-01452785.html?adp=25199699,24829149,25204098,23284033,24337524,17001508,25160879,22746904,25412546&src_module=Women&src_identifier=on%3DIMAGE_CAROUSEL_COMPONENT%60cn%3Dbrands%60hz%3D0%60ps%3D9_8%60jc%3DitemPicking_01452785&src_tab_page_id=page_home1700871044677&ici=CCCSN%3DWomen_ON%3DIMAGE_CAROUSEL_COMPONENT_OI%3D12436380_CN%3DITEM_IMAGE_MULTI_CAROUSEL_TI%3D50001_aod%3D0_PS%3D9-8_ABT%3D0' variant="outline-danger">Saiba mais</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem',marginLeft:'15px' }}>
                <Card.Img variant="top" src="https://img.ltwebstatic.com/images3_ccc/2023/11/06/11/16992724530ced74a295ff413d536e22c06a0f6dd2.webp" />
                <Card.Body>
                    <Card.Title>Moda Noturna</Card.Title>
                    <Card.Text>
                    Pijamas que Você Vai Amar
                    </Card.Text>
                    <Button href='https://br.shein.com/Brands/Luvlette-SALE-sc-01460011.html?adp=20098652,20098880,19875916,5666757,5706092&src_module=Women&src_identifier=on%3DIMAGE_CAROUSEL_COMPONENT%60cn%3Dbrands%60hz%3D0%60ps%3D9_9%60jc%3DitemPicking_01460011&src_tab_page_id=page_home1700871282629&ici=CCCSN%3DWomen_ON%3DIMAGE_CAROUSEL_COMPONENT_OI%3D12436380_CN%3DITEM_IMAGE_MULTI_CAROUSEL_TI%3D50001_aod%3D0_PS%3D9-9_ABT%3D0' variant="outline-danger">Saiba mais</Button>
                </Card.Body>
            </Card>

             <Card style={{ width: '18rem',marginLeft:'15px' }}>
                <Card.Img variant="top" src="https://img.ltwebstatic.com/images3_ccc/2023/08/23/bb/16927909978a728fd2d0e3abb56a48d5af9167acb3.webp" />
                <Card.Body>
                    <Card.Title>Do Berço à Passarela</Card.Title>
                    <Card.Text>
                    Roupas Adoráveis para Bebês e Crianças
                    </Card.Text>
                    <Button href='https://br.shein.com/campaigns/jnsq?type=immersive&src_module=Women&src_identifier=on%3DIMAGE_CAROUSEL_COMPONENT%60cn%3Dbrands%60hz%3D0%60ps%3D9_12%60jc%3DactivityNew_jnsq&src_tab_page_id=page_home1700869830534&ici=CCCSN%3DWomen_ON%3DIMAGE_CAROUSEL_COMPONENT_OI%3D12436380_CN%3DITEM_IMAGE_MULTI_CAROUSEL_TI%3D50001_aod%3D0_PS%3D9-12_ABT%3D0' variant="outline-danger">Saiba mais</Button>
                </Card.Body>
            </Card>

            
                
        </div>
    )
      
    
}

export default Produtos;