package com.badminton.Servlets;


import com.badminton.PlayerDB;
import com.badminton.Tournament;
import com.badminton.TournamentDatabase;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.sql.SQLException;

@WebServlet(name = "LiveScoreUpdate",urlPatterns = "/LiveScoreUpdate")
public class LiveScoreUpdate extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        int set = Integer.parseInt(req.getParameter("set"));
        String t1 = req.getParameter("t1");
        String t2 = req.getParameter("t2");
        String p1 = req.getParameter("p1");
        String p2 = req.getParameter("p2");
        int sp1 = Integer.parseInt(req.getParameter("sp1"));
        int sp2 = Integer.parseInt(req.getParameter("sp2"));
        String win = req.getParameter("win");
        int mid = Integer.parseInt(req.getParameter("mid"));
        Cookie[] cook = req.getCookies();
        String tournName = cook[2].getValue();
        TournamentDatabase tdb = new TournamentDatabase();
        PlayerDB pdb = new PlayerDB();
            String query = "insert into LiveUpdate (mid,tname, team1, team2, player1, player2,setNo,winner) values ( "
                    + mid+",'"+tournName+"','"+t1+"','"+t2+"','"+p1+"','"+p2+"',"+set+",'"+win+"');";
            System.out.println(query);
            int res  = tdb.liveupdate(query);

            tdb.updateTeamPoints(t1,sp1,tournName);
            tdb.updateTeamPoints(t2,sp2,tournName);
            pdb.updatePlayerPoints(p1,sp1);
            pdb.updatePlayerPoints(p2,sp2);


            out.write(Integer.toString(res));
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
     //   out.write("hey called");
        TournamentDatabase tdb = new TournamentDatabase();
        ResultSet res = tdb.getliveScore();
        String update = "";
        try {
            while (res.next()) {

                update += "Tournament : " + res.getString("tname") + "\nMatch ID : " + res.getString("mid") + "\nPlayed Between "
                        + res.getString("team1") + " and " + res.getString("team2") + "\nSet No : " + res.getString("setNo") +
                        "\nPlayer 1 : " + res.getString("player1") + " Vs " + "Player 2 : " + res.getString("player2") +
                        "\nWON BY : " + res.getString("winner");
                System.out.println(update);

            }
        } catch (SQLException e) {
            System.out.println(e);
        }
        System.out.println(update + "in serv");
        out.write(update);
       // out.write("hello");

    }
}
