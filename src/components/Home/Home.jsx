import { connect } from 'react-redux';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';
import './Home.css';

function Home ({ products, categories, users }) {

    const newProducts = products.map((p) => p.price);
    const newCategories = categories.map((p) => p.name);
    const newUsers = users.map((p) => p.name);
    const cantCategories = newCategories.length;
    const cantProducts = newProducts.length;
    const cantUsers = newUsers.length;
    
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
                            {x: "usuarios", y: `${cantUsers}`},
                            {x: "Categoria", y: `${cantCategories}`},
                            {x: "Productos", y: `${cantProducts}`},
                        ]}
                    />
                </VictoryChart>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        categories: state.categories,
        users: state.users
    }
}

export default connect(mapStateToProps, null)(Home);