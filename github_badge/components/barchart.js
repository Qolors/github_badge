

const Barchart = ({ propData }) => {

        const cleanData = []
        const gotData = propData;

        for (var key of Object.keys(gotData)) {
            let d = {
                language: key,
                amount: gotData[key]
            };

            cleanData.push(d);
        }

        console.log(cleanData);

        return (
          <div>Hello</div>
        )
    }

export default Barchart;