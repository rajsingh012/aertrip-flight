import { isEmptyObject } from "./../Utils/utils";

const getList = ({ list = [], filterObj = {} }) => {
  const { pr = {} } = filterObj;
  if (isEmptyObject(pr)) {
    return { list, filterObj };
  }
  const [minPrice = 0, maxPrice = 0] = pr;
  const newList = list.filter((data) => {
    const { farepr = 0 } = data;
    return minPrice <= farepr && maxPrice >= farepr;
  });
  return { list: newList, filterObj };
};

export default getList;
