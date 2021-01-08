import { Table, Tr, Thead, Tbody } from "@chakra-ui/react";
import React from "react";

const Calander = () => {
  return (
    <div>
      <div className="Calendar">
        <Table className="Calendar-table">
          <caption className="Calendar-caption">2020/7</caption>
          <Thead>
            <Tr>
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>T</th>
              <th>F</th>
              <th>S</th>
              <th>S</th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <td></td>
              <td></td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </Tr>
            <Tr>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
            </Tr>
            <Tr>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
            </Tr>
            <Tr>
              <td>20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
            </Tr>
            <Tr>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td>30</td>
              <td>31</td>
              <td></td>
              <td></td>
            </Tr>
            <Tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default Calander;
