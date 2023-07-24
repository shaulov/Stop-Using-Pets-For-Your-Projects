import { styled } from "styled-components";

interface TagsProps {
  className?: string;
  data: string[];
}

function Tags({ className, data }: TagsProps) {
  return (
    <List className={className ? className : ''}>
      {data.map(tag => <li key={tag}>{tag}</li>)}
    </List>
  );
}

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  li {
    display: inline-block;
    margin-bottom: 8px;
    padding: 9px 20px 11px;
    font-size: 0.75rem;
    font-weight: 700;
    color: #868889;
    text-align: center;
    text-transform: uppercase;
    border: 1px solid #868889;
    border-radius: 30px;
    transition: all .3s ease-in-out;
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 8px;
    }
    &:hover{
      border: 1px solid #242628;
      color: #242628;
      transition: all .3s ease-in-out;
    }
    &:active{
      background: #242628;
      color: #FFFFFF;
      transition: all 0s ease-in-out;
    }
  }
`;

export default Tags;