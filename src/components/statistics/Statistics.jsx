import data from './data.json';

export const Statistics = () => {
  return data.map(el => (
    <div class="statistics" key={el.id}>
      <ul class="stat-list">
        <li class="item">
          <span class="label">{el.label}</span>
          <span class="percentage">{el.percentage}</span>
        </li>
      </ul>
    </div>
  ));
};
