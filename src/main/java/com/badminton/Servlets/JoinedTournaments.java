package com.badminton.Servlets;

import com.badminton.TourList;
import com.badminton.Tournament;
import com.badminton.TournamentDatabase;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

@WebServlet(name = "JoinedTournaments", urlPatterns = "/JoinedTournaments")
public class JoinedTournaments extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        String email = req.getParameter("email");

        TournamentDatabase db = new TournamentDatabase();
        ResultSet rs = db.getJoined(email);
        String result = "";
        int k =1;
        try {
            while (rs.next()) {
                result = result + (k++) + ". "+ rs.getString("trnName")+ " \n";
            }
        }
        catch (SQLException e)
        {
            result = result + "f";
        }

        out.write(result);

        /*

        TourList tlist = new TourList();
        ArrayList<Tournament> tourList = new ArrayList<>();
        PrintWriter pw = resp.getWriter();
        try {
            while (rs.next()) {
                Tournament p = new Tournament();
                Tournament pl = p.createTour(rs);
                //System.out.println(pl);
                tourList.add(pl);
            }
            GsonBuilder builder = new GsonBuilder();
            builder.setPrettyPrinting();
            Gson gson = builder.create();
            System.out.println(tourList.toString());
            tlist = gson.fromJson(tourList.toString(), TourList.class);
            System.out.println(gson.toJson(tlist));
            pw.write(gson.toJson(tlist));
            //System.out.println(playersList);
        } catch (SQLException e) {
            e.printStackTrace();
        }

         */

    }
}
