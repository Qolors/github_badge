import { PieChart } from "react-minimal-pie-chart";
import { useState, useEffect } from "react";
import React from "react";

const Barchart = ({ propData }) => {

        const [masterData, setMasterData] = useState([]);

        const [summedLines, setSummedLines] = useState(0);

        //Label Customization
        const defaultLabels = {
            fontSize: '4px',
        }


        //INITIAL DATA CLEANING

        useEffect(() => {

            function compare (a, b) {
                return  b.value - a.value;
            }

            const cleanData = [];

            var i = 0;
            var summed = 0;
            

            var sizeOfList = Object.keys(propData).length;

            for (var key of Object.keys(propData)) {

                if (i < sizeOfList ) {i++};
                var randomColor = Math.floor(Math.random()*16777215).toString(16);
                let d = {
                    title: key,
                    value: propData[key],
                    color: `#${randomColor}`
                };

                summed = summed + propData[key];
                cleanData.push(d);

                if (i === (sizeOfList - 1)) {
                    setMasterData(cleanData.sort(compare));
                    setSummedLines(summed);
                }
            }
            
        }, [])

        

        return (
            <div className="mt-6 text-stone-800 dark:text-white/80 mb-6 bg-white/10 p-2 w-full flex flex-col justify-center items-center">
                <h2 className="font-bold text-2xl">Lifetime Languages</h2>
                <h3 className="text-medium">Based on {summedLines} lines of code </h3>
                <div className="flex mt-6">
                    <div className="flex flex-col gap-2">
                        {masterData.map(p => {
                            return (
                                <span key={p.value} className="flex gap-2 items-center">
                                    <div className="block w-[20px] h-[20px]" style={{ backgroundColor: `${p.color}` }}></div>
                                    <h2>{p.title}</h2>
                                </span>
                            )
                        })}
                    </div>
                    <div className="items-center justify-center flex flex-col text-stone-800 dark:text-white/80 font-bold">
                        {masterData && <PieChart radius={50} labelPosition={50} labelStyle={defaultLabels} label={({ dataEntry }) => Math.round(dataEntry.percentage)} animate={true} data={masterData} />}
                    </div>
                </div>
            </div>
        )
}

export default Barchart;