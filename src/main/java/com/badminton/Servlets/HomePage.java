package com.badminton.Servlets;

import com.badminton.Tournament;
import com.badminton.TournamentDatabase;
import com.google.gson.JsonObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

@WebServlet(name = "HomePage",urlPatterns = "/HomePage")
public class HomePage extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        TournamentDatabase tdb = new TournamentDatabase();
        JsonObject res = null;
        res = tdb.homeDetails();
        out.write(res.toString());
    }
}
