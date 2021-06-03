import React from 'react';
import { Text } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { HighlightCard } from '../../components/HighligtCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';


import { 
    Container, 
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList,
    LogoutButton
} from './styles'

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard(){
    const data: DataListProps[] = [
        {
        id: '1',
        type: 'positive',
        title:"Desenvolvimento de Site",
        amount:"R$ 12.000,00",
        category:{
            name:'vendas',
            icon: 'dollar-sign'
          },
        date:"14/04/2020"
    },
    {
        id: '2',
        type: 'negative',
        title:"Hamburguer Pizzy",
        amount:"R$ 100,00",
        category:{
            name:'Alimentação',
            icon: 'coffee'
          },
        date:"14/04/2020"
    },
    {
        id: '3',
        type: 'negative',
        title:"Aluguel do Apto",
        amount:"R$ 1.200,00",
        category:{
            name:'Casa',
            icon: 'shopping-bag'
          },
        date:"14/04/2020"
    }
];

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri:'https://avatars.githubusercontent.com/u/32621875?v=4' }} />
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Alexander</UserName>
                        </User>
                    </UserInfo>
                <LogoutButton onPress={() => {}}>
                    <Icon name ="power" />
                </LogoutButton>
                </UserWrapper>
            </Header>

            <HighlightCards 
             
            >
                <HighlightCard 
                    type="up"
                    title="Entradas" 
                    amount="R$ 17.400,00" 
                    lastTransaction="Última entrada dia 14 abril"
                />
                <HighlightCard 
                    type="down"
                    title="Saídas" 
                    amount="R$ 1.300,00" 
                    lastTransaction="Última saída dia 20 de abril"
                />
                <HighlightCard 
                    type="total"
                    title="Total" 
                    amount="R$ 17.400,00" 
                    lastTransaction="01 à 30 de abril"
                />
            </HighlightCards>


            <Transactions>
                <Title>Listagem</Title>

                <TransactionList 
                    data={data}
                    keyExtractor={ item => item.id }
                    renderItem={( { item }) => <TransactionCard data={item} />}

                />
            </Transactions>
        </Container>
    )
}

