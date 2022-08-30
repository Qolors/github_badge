

const Barchart = ({ propData, lines }) => {

        const cleanData = []
        const gotData = propData;

        for (var key of Object.keys(gotData)) {
            let d = {
                language: key,
                amount: gotData[key],
                percentage: Math.round((gotData[key] / lines) * 100)
            };

            cleanData.push(d);
        }

        console.log(cleanData);

        return (
          <div className="flex text-white mt-6 mb-6 rounded-lg flex-col gap-8 mx-6 bg-white/10 p-2">
            {cleanData.map((lang) => {
                
                return (
                    <div key={lang.language} className="w-full flex gap-6 items-center">
                        <div className="flex w-[75px]">{lang.language}</div>
                        <div className="bg-teal-400 p-1 justify-center items-center flex rounded-md text-black font-bold" style={{ width: `${lang.percentage}%` }}>{lang.percentage}%</div>
                    </div>
                )
            })}
          </div>
        )
    }

export default Barchart;