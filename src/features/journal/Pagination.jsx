import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { supabase } from "./supabaseClient"; // your supabase client

export function Pagination() {
  const itemsPerPage = 10;
  const [trades, setTrades] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // Fetch trades for current page
  //   useEffect(() => {
  //     const fetchTrades = async () => {
  //       // Get total count (to know total pages)
  //       const { count } = await supabase
  //         .from("Trades")
  //         .select("*", { count: "exact", head: true });

  //       setTotalPages(Math.ceil(count / itemsPerPage));

  //       // Calculate offset
  //       const from = (currentPage - 1) * itemsPerPage;
  //       const to = from + itemsPerPage - 1;

  //       // Get only items for this page
  //       const { data, error } = await supabase
  //         .from("Trades")
  //         .select("*")
  //         .range(from, to);

  //       if (error) console.error(error);
  //       else setTrades(data);
  //     };

  //     fetchTrades();
  //   }, [currentPage]);

  // Handlers
  const goToNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));
  const goToPrev = () => setCurrentPage((p) => Math.max(p - 1, 1));

  return (
    <div className="mt-1">
      {/* Trade list */}
      <ul className="space-y-2">
        {trades.map((trade) => (
          <li key={trade.id} className="rounded-lg bg-gray-100 p-2 shadow">
            {trade.pair} — {trade.status}
          </li>
        ))}
      </ul>

      {/* Pagination controls */}
      <div className="flex items-center justify-between">
        <span className="text-sm">
          Showing <strong>{currentPage}</strong> out of{" "}
          <strong>{totalPages}</strong> results
        </span>
        <div className="flex gap-4">
          <Button
            onClick={goToPrev}
            disabled={currentPage === 1}
            className={
              "hover:bg-primary !gap-0 border-1 border-[rgba(0,0,0,0.2)] bg-transparent px-3 text-sm !text-gray-500 hover:!text-white"
            }
          >
            <IoIosArrowBack />
            Prev
          </Button>

          <Button
            className={
              "hover:bg-primary !gap-0 border-1 border-[rgba(0,0,0,0.2)] bg-transparent px-3 text-sm !text-gray-500 hover:!text-white"
            }
            onClick={goToNext}
            disabled={currentPage === totalPages}
          >
            Next <IoIosArrowForward />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
