import { connect } from 'react-redux';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';
import './Home.css';

function Home ({ products }) {

    const newProducts = products.map((p) => p.price);
    const cantProducts = newProducts.length;
    console.log(cantProducts)
    
    return (
        <div>

            <h1 className='container'>Graficos Estadisticos</h1>

            <div>
                <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={{ x: 20 }}
                >
                    <VictoryBar
                        barRatio={0.5}
                        style={{
                        data: { fill: "#c43a31" }
                        }}
                        data={[
                            {x: "Categoria", y: `${24}`},
                            {x: "Productos", y: `${cantProducts}`},
                            {x: "usuarios", y: `${500}`},
                        ]}
                    />
                </VictoryChart>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(Home);