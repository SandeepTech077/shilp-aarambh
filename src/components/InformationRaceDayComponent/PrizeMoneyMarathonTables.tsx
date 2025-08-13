import Image, { StaticImageData } from "next/image";

interface TableProps {
  title: string;
  headers: string[];
  rows: string[][];
}

interface AgeGroupProps {
  title: string;
  rows: string[][];
}

interface MarathonCategory {
  title: StaticImageData | string;
  fastestWinners: TableProps;
  ageCategoryWinners: TableProps;
  ageGroups: AgeGroupProps;
}

interface MarathonTablesProps {
  data: {
    halfMarathon: MarathonCategory;
    tenKmRun: MarathonCategory;
  };
  titleLogoSvg: StaticImageData;
  subTitle: string;
}

const PrizeMoneyMarathonTables: React.FC<MarathonTablesProps> = ({
  data,
  titleLogoSvg,
  subTitle,
}) => {
  return (
    <div className="min-h-screen text-[#1D3A69]">
      <header className="text-center px-4">
        <div className="p-4 mb-4">
          <Image
            src={titleLogoSvg}
            alt="Prize Money Logo"
            width={400}
            height={100}
            className="mx-auto mb-4"
          />
          <p className="text-[26px] lg:text-[40px] w-[70%] mx-auto leading-relaxed">
            {subTitle}
          </p>
        </div>
      </header>

      <main className="mx-auto p-4 lg:p-16 pb-12 space-y-16 bg-[#FFEBEB]">
        {[data.halfMarathon, data.tenKmRun].map((category, catIdx) => (
          <section key={catIdx}>
            {/* Title */}
            <Image
              src={category.title}
              alt="Category Title"
              width={400}
              height={80}
              className="mx-auto"
            />

            <div className="rounded-2xl p-8">
              {/* Tables */}
              <div className="flex flex-col lg:flex-row gap-8 mb-8">
                {[category.fastestWinners, category.ageCategoryWinners].map(
                  (table, tableIdx) => (
                    <div key={tableIdx} className="flex-1">
                      <div className="p-6 overflow-x-auto">
                        <table className="w-full border border-gray-200 bg-white">
                          <thead>
                            <tr>
                              <th
                                colSpan={table.headers.length}
                                className="text-center font-bold py-4 text-[14px] lg:text-[16px]"
                              >
                                {table.title}
                              </th>
                            </tr>
                            <tr className="border border-gray-200">
                              {table.headers.map((header, idx) => (
                                <th
                                  key={idx}
                                  className="py-3 px-4 text-center font-bold text-[#E51D25] text-[14px] lg:text-[16px] uppercase border border-gray-200"
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>

                          <tbody>
                            {table.rows.map((row, rowIdx) => (
                              <tr
                                key={rowIdx}
                                className="border border-gray-100 hover:bg-gray-50 transition-colors"
                              >
                                {row.map((cell, cellIdx) => (
                                  <td
                                    key={cellIdx}
                                    className="py-4 px-4 text-center font-medium border border-gray-200"
                                  >
                                    <span className="text-[14px] lg:text-[16px]">
                                      {cell}
                                    </span>
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Age Groups Table */}
              <div className="rounded-xl mt-8">
                <div className="p-8 overflow-x-auto">
                  <table className="w-full border border-gray-200 bg-white">
                    <thead>
                      <tr>
                        <th
                          colSpan={category.ageGroups.rows[0]?.length || 1}
                          className="text-center font-bold text-[14px] lg:text-[16px] text-[#E51D25] py-4 border-b border-red-200"
                        >
                          {category.ageGroups.title}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.ageGroups.rows.map((row, rowIdx) => (
                        <tr key={rowIdx} className="border-b border-gray-100">
                          {row.map((cell, idx) => (
                            <td
                              key={idx}
                              className="border border-gray-200 py-3 px-4 text-center font-semibold"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default PrizeMoneyMarathonTables;
  