import taskModel from "../models/task.js";

function formatDate(date) {
  var dd = date.getDate();
  var mm = date.getMonth() + 1;
  var yyyy = date.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  date = mm + "/" + dd + "/" + yyyy;
  return date;
}
// function Last7Days () {
//     var result = [];
//     for (var i=0; i<7; i++) {
//         var d = new Date();
//         d.setDate(d.getDate() - i);
//         result.push( formatDate(d) )
//     }

//     return(result.join(','));
// }

export const getCountTask = async (req, res) => {
  try {
    var result = [];
    for (var i = 0; i < 10; i++) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      const dd = d.getDate();
      const totalTask = await taskModel.find({ day: dd });
      result.push(totalTask);
    }
    // const rev_result = result.reverse();
    res.status(200).json({ arr: result });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
