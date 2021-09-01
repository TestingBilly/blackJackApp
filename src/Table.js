import React, {Component} from 'react';
import Gap from './Gap.js';
import DealersCards from './DealersCards.js';
import PlayersCards from './PlayersCards.js';
import Buttons from './Buttons.js';
import DealersHand from './DealersHand.js';
import PlayersHand from './PlayersHand.js';

class Table extends Component{

render(){
  return (
    <div>

         <table>
             <tr>
                 <th>
                     <DealersHand />
                 </th>
                 <th>
                 <Gap />
                 </th>
                 <th>
                     <PlayersHand />
                 </th>
             </tr>
             <tr>
                  <DealersCards />
                  <td>  </td>
                   <PlayersCards />
             </tr>
             <tr>
                <DealersCards />
                 <td>  </td>
                <PlayersCards />
             </tr>

             <tr>
             </tr>

         </table>
    </div>
  );
  }
}

export default Table;
