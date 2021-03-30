import React from 'react'
import { Card, CardBody } from 'reactstrap'

function Header({name, title}) {
    return(
        <div>            
            <Card className="my-2 bg-warning">
                <CardBody>
                    <h1 className="text-center my-2">Learn latest Tech here</h1>
                </CardBody>
            </Card>
        </div>
    );
}

export default Header;